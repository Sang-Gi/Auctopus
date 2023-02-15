import React from "react";
import styled from "styled-components";
import ProfileImg from "@/assets/common/profile.png";
import turtleImg from "@/assets/badges/turtle.svg";
import ItemList from "@components/notification/ItemList";
import Layout from "@components/common/Layout";
import NoticeMooneo from "@/assets/mooneo.svg";

const userLocal = localStorage.getItem("user");
const user = userLocal ? JSON.parse(userLocal) : "";
const notiDummy = [
  {
    img: ProfileImg,
    context:
      "  ‘Airpods Max 스페이스’ 상품의 경매시작 시간이 15시40분이에요.준비되셨나요?",
  },
  {
    img: NoticeMooneo,
    context: `Auctopus에 처음 오신 ‘${user.nickname}’님! 지구를 지키기에 동참에 주셔셔 감사해요!`,
  },
];

export default function Notification() {
  return (
    <Layout back={true} title={"알림함"}>
      <ItemList notiList={notiDummy} />
    </Layout>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;
  background-color: transparent;
  height: 3rem;
  align-items: center;
  .backIcon {
    color: ${(props) => props.theme.colors.primary};
    width: 3rem;
    height: 3rem;
  }
  .title {
    font-weight: bold;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.primary};
  }
  .right-comp {
    width: 3rem;
  }
`;
const Container = styled.div`
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;
