package com.sprint.odigo.application.cancel.v1.sns;

import com.sprint.odigo.application.cancel.v1.Observer;

public abstract class NotificationDecorator<T> implements Observer<T> {
    Observer<T> t;

    protected abstract void sendMessage(T t);

}
