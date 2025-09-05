import React from 'react';

interface SmartLineBreakProps {
    text: string;
    className?: string;
}

const SmartLineBreak: React.FC<SmartLineBreakProps> = ({ text, className = "" }) => {
    // Split the text by the pipe divider
    const segments = text.split(' | ').map(segment => segment.trim());

    // If there are exactly 3 segments, use the special layout logic
    if (segments.length === 3) {
        return (
            <>
                <style>{`
                    @media (max-width: 575px) {
                        .single-line { display: none !important; }
                        .multi-line { display: block !important; }
                    }
                    @media (min-width: 576px) {
                        .single-line { display: block !important; }
                        .multi-line { display: none !important; }
                    }
                `}</style>

                {/* Single line version - shown above 575px */}
                <p className={`single-line ${className}`}>
                    {segments[0]} | {segments[1]} | {segments[2]}
                </p>

                {/* Multi-line version - shown at 575px and below */}
                <div className={`multi-line ${className}`} style={{ textAlign: 'center', display: 'none' }}>
                    <div>{segments[0]}</div>
                    <div>| {segments[1]} |</div>
                    <div>{segments[2]}</div>
                </div>
            </>
        );
    }

    // Fallback to original logic for other cases
    return (
        <p className={className}>
            {segments.map((segment, index) => (
                <React.Fragment key={index}>
                    <span className="inline-block whitespace-nowrap">
                        {segment}
                    </span>
                    {index < segments.length - 1 && (
                        <>
                            <span className="mx-1 inline">|</span>
                            <wbr />
                        </>
                    )}
                </React.Fragment>
            ))}
        </p>
    );
};

export { SmartLineBreak };