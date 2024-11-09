import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M25.7071 0.707107C26.0976 0.316582 26.0976 -0.316582 25.7071 -0.707107L19.3431 -7.07107C18.9526 -7.46159 18.3195 -7.46159 17.9289 -7.07107C17.5384 -6.68054 17.5384 -6.04738 17.9289 -5.65685L23.5858 0L17.9289 5.65685C17.5384 6.04738 17.5384 6.68054 17.9289 7.07107C18.3195 7.46159 18.9526 7.46159 19.3431 7.07107L25.7071 0.707107ZM0 1L25 1V-1L0 -1L0 1Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
