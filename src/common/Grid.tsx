import React, { forwardRef } from "react";
import styled from "styled-components";

type AlignItems =
  | "baseline"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "inherit"
  | "initial"
  | "left"
  | "normal"
  | "right"
  | "safe"
  | "self-end"
  | "self-start"
  | "start"
  | "stretch";

type JustifyContent =
  | "baseline"
  | "center"
  | "end"
  | "flex-end"
  | "flex-start"
  | "inherit"
  | "initial"
  | "left"
  | "normal"
  | "right"
  | "safe"
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "start"
  | "stretch";

export interface IGridProps extends React.HTMLAttributes<HTMLDivElement> {
  grow?: boolean;
  shrink?: boolean;
  gap?: string;
  flex?: number | string;
  wrap?: "wrap" | "nowrap";
  direction?: "row" | "column";
  justify?: JustifyContent;
  alignItems?: AlignItems;
  basis?: string;
  gutter?:
    | [number]
    | [number, number]
    | [number, number, number]
    | [number, number, number, number];
  padding?:
    | [number]
    | [number, number]
    | [number, number, number]
    | [number, number, number, number];
  height?: number | string;
  container?: boolean;
}

const StyledGrid = styled.div<IGridProps>`
  display: flex;

  ${({ wrap, direction, justify, alignItems }) => `
    flex-wrap: ${wrap};
    flex-direction: ${direction};
    justify-content: ${justify || "unset"};
    align-items: ${alignItems || "unset"};
  `}

  flex-grow: ${({ grow }) => (grow ? 1 : "unset")};
  flex-shrink: ${({ shrink }) => (shrink ? 1 : "unset")};
  flex-basis: ${({ basis }) => basis};
  gap: ${({ gap }) => gap};

  ${({ flex }) =>
    flex &&
    `
      flex: ${flex};
    `}

  ${({ gutter }) =>
    gutter &&
    `
      margin: ${gutter.map((mar) => `${mar}px`).join(" ")};
    `}
  
  ${({ padding }) =>
    padding &&
    `
      padding: ${padding.map((pad) => `${pad}px`).join(" ")};
    `}
  
  ${({ height }) =>
    height &&
    `
      height: ${height};
    `}
  
  ${({ container }) =>
    container &&
    `
      height: 100%;
    `}
`;

const Grid = forwardRef<HTMLDivElement, IGridProps>(
  (
    {
      children,
      className,
      direction = "row",
      wrap,
      basis,
      container = false,
      gap,
      ...props
    },
    ref
  ) => {
    return (
      <StyledGrid
        container={container}
        ref={ref}
        className={className ? `${className} vc-grid` : "vc-grid"}
        direction={direction}
        gap={gap}
        basis={basis}
        wrap={wrap}
        {...props}
      >
        {children}
      </StyledGrid>
    );
  }
);

export default Grid;
