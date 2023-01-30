import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import styled from "styled-components";
import { ReactComponent as Turtle } from "../../assets/badges/turtle.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Hamburger from "../common/Hamburger";

/**
 * @param title
 * @param leftIcon none은 없음, back은 뒤로가기 버튼, turtle은 거북이 아이콘
 */
export interface IProps {
  title?: string;
  leftIcon: "none" | "back" | "turtle";
}

/**
 * 헤더
 *
 * @param props.title 제목
 * @param props.rightComponent 오른쪽 코너 컴포넌트
 * @returns Header component
 *
 * @example
 * ```
 * <Header title="Autopus" hasBack />
 * ```
 */
export default function Header(props: IProps): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  const RightComponent = (): JSX.Element => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <NotificationsNoneOutlinedIcon className="icon" />
            <SearchOutlinedIcon className="icon" />
          </>
        );
      case "/detail":
        return <ShareOutlinedIcon className="icon" />;
      default:
        return <></>;
    }
  };

  return (
    <StyledHeader>
      <Hamburger />
      {props.leftIcon === "back" ? (
        <ChevronLeftOutlinedIcon
          className="backIcon"
          onClick={() => navigate(-1)}
        />
      ) : props.leftIcon === "turtle" ? (
        <Turtle className="signatureIcon" />
      ) : (
        <></>
      )}
      <h1 className="title">{props.title}</h1>
      <div className="iconContainer">
        <RightComponent />
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;
  background-color: transparent;

  .backIcon {
    position: relative;
    left: -2rem;
    color: ${(props) => props.theme.colors.primary};
    width: 5rem;
    height: 5rem;
  }

  .signatureIcon {
    width: 8.6rem;
    height: 5.4rem;
  }

  .title {
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.primary};
  }

  .iconContainer {
    display: flex;
    align-items: center;

    .icon {
      color: ${(props) => props.theme.colors.primary};
      margin: 0 0.5rem;
      width: 3rem;
      height: 3rem;
    }
  }
`;