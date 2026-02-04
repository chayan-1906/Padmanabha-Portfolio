import {ImageResponse} from "next/og";

export const runtime: string = 'edge';
export const alt: string = 'Padmanabha Das - Full-Stack Developer';
export const size: {width: number; height: number} = {width: 1200, height: 630};
export const contentType: string = 'image/png';

async function OGImage(): Promise<ImageResponse> {
    return new ImageResponse(
        <div
            style={{
                background: 'linear-gradient(135deg, #0a0a0f 0%, #141420 100%)',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <div style={{fontSize: 72, fontWeight: 800, color: '#6366f1'}}>
                Padmanabha Das
            </div>
            <div style={{fontSize: 28, color: '#9ca3af', marginTop: 16, fontWeight: 500}}>
                Full-Stack Developer
            </div>
            <div style={{fontSize: 18, color: '#6b7280', marginTop: 12}}>
                Flutter, React & Next.js Developer
            </div>
        </div>,
        {...size},
    );
}

export default OGImage;
