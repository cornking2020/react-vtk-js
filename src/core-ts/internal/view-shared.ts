import { PropsWithChildren } from 'react';
import { ManipulatorSettings } from '../modules/useInteractorStyle';
import { Props as OpenGLRenderWindowProps } from '../OpenGLRenderWindow';
import { Props as RendererProps } from '../Renderer';
import { Props as RenderWindowProps } from '../RenderWindow';

export interface Props
  extends PropsWithChildren,
    OpenGLRenderWindowProps,
    RenderWindowProps,
    RendererProps {
  /**
   * List of picking listeners to bind. By default it is disabled (empty array).
   */
  // pickingModes?: 'click' | 'hover' | 'select' | 'mouseDown' | 'mouseUp';
  /**
   * User callback function for click
   */
  // onClick?: () => void;
  /**
   * User callback function for mouse down
   */
  // onMouseDown?: () => void;
  /**
   * User callback function for mouse up
   */
  // onMouseUp?: () => void;
  /**
   * User callback function for hover
   */
  // onHover?: () => void;
  /**
   * User callback function for box select
   */
  // onSelect?: () => void;
  /**
   * Defines the tolerance of the click and hover selection.
   */
  // pointerSize?: number;
  /**
   * Show/Hide orientation axes.
   */
  // showOrientationAxes?: boolean;

  /**
   * Configure the interactions
   */
  interactorSettings?: ManipulatorSettings[];

  /**
   * Whether to automatically re-set the interactor style's center of rotation. (default: true)
   *
   * This is a convenience property for interactor styles that support setCenterOfRotation().
   */
  autoCenterOfRotation?: boolean;
}

export const DefaultProps = {
  interactorSettings: [
    {
      button: 1,
      action: 'Rotate',
    },
    {
      button: 2,
      action: 'Pan',
    },
    {
      button: 3,
      action: 'Zoom',
      scrollEnabled: true,
    },
    {
      button: 1,
      action: 'Pan',
      alt: true,
    },
    {
      button: 1,
      action: 'Zoom',
      control: true,
    },
    {
      button: 1,
      action: 'Select',
      shift: true,
    },
    {
      button: 1,
      action: 'Roll',
      alt: true,
      shift: true,
    },
  ] as ManipulatorSettings[],
  autoCenterOfRotation: true,
};
