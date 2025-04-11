import { Skeleton } from "@/components/ui/skeleton"

const AboutSkeleton = () => {
    return (
        <div>
            <div className="space-y-2 rounde">
                <Skeleton className="h-4 max-w-sm" />
                <Skeleton className="h-4 max-w-sm" />
                <Skeleton className="h-4 max-w-sm" />
            </div>

            <div className="space-y-2">
                <Skeleton className="h-4 max-w-sm" />
                <Skeleton className="h-4 max-w-sm" />
            </div>

            <div className="space-y-2">
                <Skeleton className="h-4 max-w-sm" />
                <Skeleton className="h-4 max-w-sm" />
                <Skeleton className="h-4 max-w-sm" />
            </div>

        </div>
    )
}

export default AboutSkeleton