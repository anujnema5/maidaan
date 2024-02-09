'use client'

import { useRouter } from "next/navigation"

type LoginButtonProps = {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean
}

const LoginButton = ({
    children, mode = 'redirect', asChild
}: LoginButtonProps) => {

    const router = useRouter()

    const onClick = () => {
        console.log("Ayo Whats up this is loggin button bitch");
        router.push("/auth/login")
    }

    if (mode === 'modal') {
        return (
            <span>TODO: Implement modal</span>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">{children}</span>
    )
}

export default LoginButton