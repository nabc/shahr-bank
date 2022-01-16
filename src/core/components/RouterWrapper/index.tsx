import { Fragment, PropsWithChildren } from "react";
import Header from "src/core/components/Header";

type RouterWrapperProps = {};

export default function RouterWrapper({ children }: PropsWithChildren<RouterWrapperProps>) {
  return (
    <Fragment>
      <Header />
      <section style={{ margin: "0px 150px" }}>{children}</section>
    </Fragment>
  );
}
