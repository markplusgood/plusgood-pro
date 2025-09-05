import React from 'react';

interface SmartLineBreakProps {
    text: string;
    className?: string;
}

const SmartLineBreak: React.FC<SmartLineBreakProps> = ({ text, className = "" }) => {
    // Split the text by the pipe divider
    const segments = text.split(' | ').map(segment => segment.trim());

    return (
        <p className={className}>
            {segments.map((segment, index) => (
                <React.Fragment key={index}>
                    <span className="inline-block whitespace-nowrap">
                        {segment}
                    </span>
                    {/* Add divider after each segment except the last one */}
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

// Named export
export { SmartLineBreak };