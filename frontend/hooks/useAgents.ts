import { useState, useEffect, useCallback } from 'react'
import { Agent } from '@/types'
import { AgentsAPI, AgentsResponse, ApiError } from '@/lib/api'

interface UseAgentsOptions {
  autoFetch?: boolean
  initialFilters?: {
    category?: string
    industry?: string
    query?: string
  }
}

interface UseAgentsReturn {
  agents: Agent[]
  loading: boolean
  error: string | null
  total: number
  refetch: () => Promise<void>
  search: (query: string) => Promise<void>
  filter: (filters: { category?: string; industry?: string; query?: string }) => Promise<void>
  clearError: () => void
}

export function useAgents(options: UseAgentsOptions = {}): UseAgentsReturn {
  const { autoFetch = true, initialFilters } = options
  
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [total, setTotal] = useState(0)

  const fetchAgents = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response: AgentsResponse = await AgentsAPI.getAll()
      
      if (response.success) {
        setAgents(response.data)
        setTotal(response.total)
      } else {
        setError(response.message || 'Failed to fetch agents')
      }
    } catch (err) {
      const apiError = err instanceof ApiError ? err : new ApiError('Failed to fetch agents')
      setError(apiError.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const searchAgents = useCallback(async (query: string) => {
    try {
      setLoading(true)
      setError(null)
      
      const response: AgentsResponse = await AgentsAPI.search(query)
      
      if (response.success) {
        setAgents(response.data)
        setTotal(response.total)
      } else {
        setError(response.message || 'Search failed')
      }
    } catch (err) {
      const apiError = err instanceof ApiError ? err : new ApiError('Search failed')
      setError(apiError.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const filterAgents = useCallback(async (filters: { 
    category?: string; 
    industry?: string; 
    query?: string 
  }) => {
    try {
      setLoading(true)
      setError(null)
      
      const response: AgentsResponse = await AgentsAPI.filter(filters)
      
      if (response.success) {
        setAgents(response.data)
        setTotal(response.total)
      } else {
        setError(response.message || 'Filter failed')
      }
    } catch (err) {
      const apiError = err instanceof ApiError ? err : new ApiError('Filter failed')
      setError(apiError.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  // 初始加载
  useEffect(() => {
    if (autoFetch) {
      if (initialFilters) {
        filterAgents(initialFilters)
      } else {
        fetchAgents()
      }
    }
  }, [autoFetch, initialFilters, fetchAgents, filterAgents])

  return {
    agents,
    loading,
    error,
    total,
    refetch: fetchAgents,
    search: searchAgents,
    filter: filterAgents,
    clearError
  }
} 