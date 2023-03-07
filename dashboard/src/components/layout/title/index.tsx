import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import {logo, foxtons_horizontal} from 'assets'

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Logo" width="28px" />
        ) : (
          <img src={foxtons_horizontal} alt="Logo" width="140px" />
        )}
      </Link>
    </Button>
  );
};
