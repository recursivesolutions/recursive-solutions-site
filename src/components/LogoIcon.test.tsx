import { describe, it, expect } from 'vitest';
import React from 'react';
import { LogoIcon } from './LogoIcon';

describe('LogoIcon Component', () => {
  it('renders a valid SVG element with 32x32 viewBox', () => {
    const element = LogoIcon({ size: 36, className: 'custom-logo' });
    expect(element.type).toBe('svg');
    expect(element.props.viewBox).toBe('0 0 32 32');
    expect(element.props.width).toBe(36);
    expect(element.props.height).toBe(36);
    expect(element.props.className).toContain('custom-logo');
  });

  it('contains concentric aligned children including the center circle at (16, 16)', () => {
    const element = LogoIcon({});
    const children = React.Children.toArray(element.props.children);
    
    // Find the center circle element
    const circleChild = children.find(
      (child: any) => child?.type === 'circle'
    ) as React.ReactElement<any> | undefined;

    expect(circleChild).toBeDefined();
    expect(circleChild?.props.cx).toBe(16);
    expect(circleChild?.props.cy).toBe(16);
    expect(circleChild?.props.r).toBe(2);
    expect(circleChild?.props.fill).toBe('#67e8f9');
  });
});
