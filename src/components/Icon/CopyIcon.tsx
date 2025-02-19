import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const CopyIcon: FC<IconProps> = memo(props => (
  <Icon {...props} className="h-4 w-4" viewBox="0 0 1920 1920">
    <path d="M0 1919.887h1467.88V452.008H0v1467.88ZM1354.965 564.922v1242.051H112.914V564.922h1242.051ZM1920 0v1467.992h-338.741v-113.027h225.827V112.914H565.035V338.74H452.008V0H1920ZM338.741 1016.93h790.397V904.016H338.74v112.914Zm0 451.062h790.397v-113.027H338.74v113.027Zm0-225.588h564.57v-112.913H338.74v112.913Z" />
  </Icon>
));
export default CopyIcon;
