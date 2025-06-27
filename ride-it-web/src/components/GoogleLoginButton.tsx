import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    google?: any
  }
}

interface Props {
  onSuccess: (credentialResponse: unknown) => void
}

export const GoogleLoginButton = ({ onSuccess }: Props) => {
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    script.onload = () => {
      if (window.google && buttonRef.current) {
        window.google.accounts.id.initialize({
          client_id: 'YOUR_GOOGLE_CLIENT_ID',
          callback: onSuccess,
        })
        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: 'outline',
          size: 'large',
        })
      }
    }
    document.body.appendChild(script)
  }, [onSuccess])

  return <div ref={buttonRef} />
}
