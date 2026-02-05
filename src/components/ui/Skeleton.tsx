import {cn} from "@/lib/utils";
import {SkeletonProps} from "@/types/ui";

function Skeleton({className}: SkeletonProps) {
    return (
        <div
            className={cn('animate-pulse rounded-md', className)}
            style={{backgroundColor: 'rgb(var(--color-foreground) / 0.15)'}}
        />
    );
}

export {Skeleton};
