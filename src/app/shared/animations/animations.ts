// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeInAnimation', [

    // route 'enter' transition
    transition(':enter', [

      // css styles at start of transition
      style({
        height: 0,
        opacity: 0,
        transform: 'translateY(50px)'
      }),

      // animation and styles at end of transition
      animate('500ms 500ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({
        height: '*',
        opacity: 1,
        transform: 'translateY(0)'
      }))
    ]),

    // route 'leave' transition
    transition(':leave', [

      // css styles at start of transition
      style({
        opacity: 1,
        transform: 'translateY(0)'
      }),

      // animation and styles at end of transition
      animate('500ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({
        opacity: 0,
        transform: 'translateY(50px)'
      }))
    ]),
  ]);

export const slideUpAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('slideUpAnimation', [
    state('in', style({ height: '*' })),
    transition('void => *', [
      style({
        height: 0,
        opacity: 0,
      }),
      animate(150)
    ]),
    transition('* => void', [
      animate(150, style({
        height: 0,
        opacity: 0,
      }))
    ])
  ]);

export const fadeUpAnimation =
  // trigger name for attaching this animation to an element using the [@triggerName] syntax
  trigger('fadeUpAnimation', [
    state('in', style({ transform: 'translateY(0px)' })),
    transition('void => *', [
      style({
        transform: 'translateY(20px)',
        opacity: 0,
      }),
      animate('500ms cubic-bezier(0.165, 0.84, 0.44, 1)')
    ]),
    transition('* => void', [
      animate('500ms cubic-bezier(0.165, 0.84, 0.44, 1)', style({
        transform: 'translateY(20px)',
        opacity: 0,
      }))
    ])
  ]);
