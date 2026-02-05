import {cn} from "@/lib/utils";
import {Skeleton} from "@/components/ui/Skeleton";

function ProjectsLoading() {
    return (
        <div className={cn('min-h-screen')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
            {/* Navigation Skeleton */}
            <nav className={cn('fixed top-0 left-0 right-0 z-50 px-6 py-4')} style={{backgroundColor: 'rgba(var(--color-background), 0.95)'}}>
                <div className={cn('max-w-7xl mx-auto flex items-center justify-between')}>
                    <Skeleton className={cn('h-8 w-32')} />
                    <div className={cn('flex gap-6')}>
                        {Array.from({length: 6}).map((_, i) => (
                            <Skeleton key={i} className={cn('h-6 w-20')} />
                        ))}
                    </div>
                </div>
            </nav>

            <main className={cn('min-h-screen pt-32 pb-20 px-6')}>
                <div className={cn('max-w-7xl mx-auto')}>
                    {/* Breadcrumb Skeleton */}
                    <div className={cn('mb-8')}>
                        <Skeleton className={cn('h-4 w-32')} />
                    </div>

                    {/* Header Skeleton */}
                    <div className={cn('text-center mb-20 space-y-6')}>
                        <Skeleton className={cn('h-14 w-80 mx-auto')} />
                        <Skeleton className={cn('h-6 w-full max-w-3xl mx-auto')} />
                    </div>

                    {/* Projects Grid Skeleton */}
                    <div className={cn('space-y-16')}>
                        {Array.from({length: 3}).map((_, categoryIndex) => (
                            <div key={categoryIndex} className={cn('space-y-8')}>
                                {/* Category Header */}
                                <div className={cn('flex items-center gap-4')}>
                                    <Skeleton className={cn('h-12 w-12 rounded-xl')} />
                                    <Skeleton className={cn('h-8 w-48')} />
                                </div>

                                {/* Projects Grid */}
                                <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6')}>
                                    {Array.from({length: 6}).map((_, projectIndex) => (
                                        <Skeleton key={projectIndex} className={cn('h-72 rounded-2xl')} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export {ProjectsLoading};
