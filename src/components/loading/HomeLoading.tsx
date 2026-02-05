import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/Skeleton";

function HomeLoading() {
    return (
        <div className={cn('min-h-screen')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
            {/* Navigation Skeleton */}
            <nav className={cn('fixed top-0 left-0 right-0 z-50 px-6 py-4')} style={{backgroundColor: 'rgba(var(--color-background), 0.95)'}}>
                <div className={cn('max-w-7xl mx-auto flex items-center justify-between')}>
                    <Skeleton className={cn('h-8 w-32')}/>
                    <div className={cn('flex gap-6')}>
                        {Array.from({length: 6}).map((_, i) => (
                            <Skeleton key={i} className={cn('h-6 w-20')}/>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section Skeleton */}
            <div className={cn('min-h-screen flex items-center justify-center px-6 pt-20')}>
                <div className={cn('max-w-4xl mx-auto text-center space-y-8')}>
                    <Skeleton className={cn('h-16 w-3/4 mx-auto')}/>
                    <Skeleton className={cn('h-12 w-2/3 mx-auto')}/>
                    <Skeleton className={cn('h-6 w-full max-w-2xl mx-auto')}/>
                    <Skeleton className={cn('h-6 w-5/6 mx-auto')}/>
                    <div className={cn('flex gap-4 justify-center mt-8')}>
                        <Skeleton className={cn('h-12 w-40')}/>
                        <Skeleton className={cn('h-12 w-40')}/>
                    </div>
                </div>
            </div>

            {/* Content Sections Skeleton */}
            <div className={cn('max-w-7xl mx-auto px-6 py-20 space-y-32')}>
                {/* Section 1 - About */}
                <div className={cn('space-y-8')}>
                    <div className={cn('text-center space-y-4')}>
                        <Skeleton className={cn('h-10 w-48 mx-auto')}/>
                        <Skeleton className={cn('h-6 w-96 mx-auto')}/>
                    </div>
                    <Skeleton className={cn('h-64 w-full rounded-2xl')}/>
                </div>

                {/* Section 2 - Skills Grid */}
                <div className={cn('space-y-8')}>
                    <div className={cn('text-center space-y-4')}>
                        <Skeleton className={cn('h-10 w-48 mx-auto')}/>
                        <Skeleton className={cn('h-6 w-96 mx-auto')}/>
                    </div>
                    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6')}>
                        {Array.from({length: 4}).map((_, i) => (
                            <Skeleton key={i} className={cn('h-80 rounded-2xl')}/>
                        ))}
                    </div>
                </div>

                {/* Section 3 - Cards Grid */}
                <div className={cn('space-y-8')}>
                    <div className={cn('text-center space-y-4')}>
                        <Skeleton className={cn('h-10 w-48 mx-auto')}/>
                        <Skeleton className={cn('h-6 w-96 mx-auto')}/>
                    </div>
                    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-8')}>
                        {Array.from({length: 4}).map((_, i) => (
                            <Skeleton key={i} className={cn('h-64 rounded-2xl')}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export {HomeLoading};
