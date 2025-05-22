import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement;
}

export function SectionTitle({ children }: SectionTitleProps) {
    return React.cloneElement(children, {
        className: children.props.className + " text-3xl lg:text-5xl lg:leading-tight font-bold"
    });
};
