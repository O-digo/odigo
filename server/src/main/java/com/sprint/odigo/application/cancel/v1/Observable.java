package com.sprint.odigo.application.cancel.v1;

public interface Observable<T> {
    public boolean register(Observer<T> o);
    public boolean remove(Observer<T> o);
    public boolean sendMessage();
}
