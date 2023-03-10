package com.auctopus.project.api.service;

import com.auctopus.project.db.domain.Live;

/**
 * 실시간 경매방 관련 로직 처리를 위한 서비스 구현
 */
public interface LiveService {

    // 라이브 시작(생성)
    void createLive(int liveSeq);

    // 자동 경매 신청자 등록
    void registerAutoBidder(int liveSeq, String userEmail, int autoPrice);

    // 최고 응찰자 찾기
    String[] autoBidding(int liveSeq, String currBidder, String currPrice);

    // 최고 응찰자 정보 갱신
    void updateTopBidderInfo(String userEmail, int liveSeq, int price);

    // 라이브 종료(삭제)
    void deleteLive(int liveSeq);

    // 라이브 정보 가져오기
    Live getLiveInfo(int liveSeq);

    // 시청자 증가
    void increaseViewer(int liveSeq);

    // 시청자 퇴장
    void decreaseViewer(int liveSeq);

    // 입찰자 증가
    void increaseParticipant(int liveSeq);

    // 입찰자 퇴장
    void decreaseParticipant(int liveSeq);


}
