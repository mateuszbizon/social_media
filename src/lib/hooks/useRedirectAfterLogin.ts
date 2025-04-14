import { useSearchParams } from 'next/navigation'

function useRedirectAfterLogin() {
    const searchParams = useSearchParams()
    const redirectParam = searchParams.get("redirect") || "/"
    const redirectTo = isRedirectSafe(redirectParam) ? redirectParam : "/"

    function isRedirectSafe(url: string) {
        return url.startsWith("/") && !url.startsWith("//")
    }

  return redirectTo
}

export default useRedirectAfterLogin