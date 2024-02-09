import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteMetadata } from "@/data/siteMetaData";

const font = Poppins({
    subsets: ['latin'],
    weight: ['600']
})

type HeaderProps = {
    label: string
}

export const Header = ({ label }: HeaderProps) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-y-2">
            <h1 className={cn('text-3xl font-semibold', font.className)}>
                
                <span className='text-green-600'>
                    {siteMetadata.headerTitle.slice(0, 3)}
                </span>

                <span>{siteMetadata.headerTitle.slice(3, siteMetadata.headerTitle.length)}</span></h1>

            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    )
}