import {Suspense} from "react";
import {headers} from "next/headers";
import {trackAnalytics} from "@/lib/analytics";
import {AnalyticsTrackerProps} from "@/types/analytics";

async function AnalyticsTracker({pageUrl}: AnalyticsTrackerProps) {
    return (
        <Suspense fallback={null}>
            <AnalyticsTrackerWrapper pageUrl={pageUrl}/>
        </Suspense>
    );
}

async function AnalyticsTrackerWrapper({pageUrl}: AnalyticsTrackerProps) {
    await headers();
    await trackAnalytics({pageUrl});

    return null;
}

export {AnalyticsTracker};
