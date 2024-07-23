export function isHoverCircleArea(hoverArea: HoverArea): hoverArea is HoverCircleArea {
  return 'radius' in hoverArea;
}

type HoverCircleArea = {
  x: number;
  y: number;
  radius: number;
};

function drawCircleArea(hoverArea: HoverCircleArea, context: CanvasRenderingContext2D) {
  context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  context.lineWidth = 3;
  const { x, y, radius } = hoverArea;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.stroke();
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

export type HoverArea = HoverRectArea | HoverCircleArea;

export function drawHoverArea(hoverArea: HoverArea, context: CanvasRenderingContext2D) {
  if (isHoverCircleArea(hoverArea)) {
    drawCircleArea(hoverArea, context);
  } else {
    drawRectArea(hoverArea, context);
  }
}

export const HoverAreaNone = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
};

export const HoverAreaLeft = {
  x1: 0,
  y1: 0,
  x2: 72,
  y2: 200,
};

export const HoverAreaRight = {
  x1: 73,
  y1: 0,
  x2: 143,
  y2: 200,
};

export const HoverAreaTop = {
  x1: 7,
  y1: 7,
  x2: 136,
  y2: 107,
};

export const HoverAreaBottom = {
  x1: 7,
  y1: 108,
  x2: 136,
  y2: 193,
};

export const HoverAreaAll = {
  x1: 0,
  y1: 0,
  x2: 143,
  y2: 200,
};
