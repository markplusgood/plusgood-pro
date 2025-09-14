import React from 'react';

interface SmartLineBreakProps {
    text: string;
    className?: string;
}

const SmartLineBreak: React.FC<SmartLineBreakProps> = ({ text, className = "" }) => {
    // Split the text by the pipe divider
    const segments = text.split(' | ').map(segment => segment.trim());

    // If there are exactly 3 segments, use the multi-line layout
    if (segments.length === 3) {
        return (
            <div className={className} style={{ textAlign: 'center' }}>
                <div>{segments[0]}</div>
                <div>{segments[1]}</div>
                <div>{segments[2]}</div>
            </div>
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