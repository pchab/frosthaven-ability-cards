function isHoverCircleArea(hoverArea: HoverArea): hoverArea is HoverCircleArea {
  return 'radius' in hoverArea;
}

export type HoverCircleArea = {
  x: number;
  y: number;
  radius?: number;
};

function drawCircleArea(hoverArea: HoverCircleArea, context: CanvasRenderingContext2D) {
  context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  context.lineWidth = 3;
  const { x, y, radius = 10 } = hoverArea;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.stroke();
}

function getCircleAreaProps(hoverArea: HoverCircleArea) {
  const { x, y, radius = 10 } = hoverArea;
  return {
    coords: `${x},${y},${radius}`,
    shape: 'circle',
  };
}

type HoverRectArea = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

function drawRectArea(hoverArea: HoverRectArea, context: CanvasRenderingContext2D) {
  context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  context.lineWidth = 3;
  const { x1, y1, x2, y2 } = hoverArea;
  context.strokeRect(x1, y1, x2 - x1, y2 - y1);
}

function getRectAreaProps(hoverArea: HoverRectArea) {
  const { x1, x2, y1, y2 } = hoverArea;
  return {
    coords: `${x1},${y1},${x2},${y2}`,
    shape: 'rect',
  };
}

export type HoverArea = HoverRectArea | HoverCircleArea;

export function drawHoverArea(hoverArea: HoverArea, context: CanvasRenderingContext2D) {
  if (isHoverCircleArea(hoverArea)) {
    drawCircleArea(hoverArea, context);
  } else {
    drawRectArea(hoverArea, context);
  }
}

export function getHoverAreaProps(hoverArea: HoverArea) {
  if (isHoverCircleArea(hoverArea)) {
    return getCircleAreaProps(hoverArea);
  } else {
    return getRectAreaProps(hoverArea);
  }
}

export const PredefinedHoverArea: Record<string, HoverArea> = {
  none: {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  },
  left: {
    x1: 0,
    y1: 0,
    x2: 72,
    y2: 200,
  },
  right: {
    x1: 73,
    y1: 0,
    x2: 143,
    y2: 200,
  },
  top: {
    x1: 7,
    y1: 7,
    x2: 136,
    y2: 107,
  },
  bottom: {
    x1: 7,
    y1: 108,
    x2: 136,
    y2: 193,
  },
  all: {
    x1: 0,
    y1: 0,
    x2: 143,
    y2: 200,
  },
};
