package com.sprint.odigo.application.cancel.v1.sns;

import com.sprint.odigo.application.cancel.v1.Observer;
import com.sprint.odigo.domain.dto.ReservationInfo;
import jakarta.mail.MessagingException;

import java.io.UnsupportedEncodingException;

public class KakaoNotification extends NotificationDecorator<ReservationInfo> {
    public KakaoNotification(Observer<ReservationInfo> observer) {
        this.t = observer;
    }

    @Override
    public boolean update(ReservationInfo message) throws MessagingException, UnsupportedEncodingException {
        sendMessage(message);
        return t.update(message);
    }

    @Override
    protected void sendMessage(ReservationInfo message) {
        System.out.println("[SEND to KakaoTalk]" + message);
    }
}
