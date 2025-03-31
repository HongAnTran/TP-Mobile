import AuthServiceClientApi from '@/services/client/authService'
import { useQuery } from '@tanstack/react-query'

export default function useProfile() {
    return useQuery({
        queryKey: ['profile'],
        queryFn: () => AuthServiceClientApi.profile(),
        // staleTime : Infinity
    })
}
