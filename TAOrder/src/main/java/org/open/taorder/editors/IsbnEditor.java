package org.open.taorder.editors;

import org.open.taorder.model.Isbn;
import org.springframework.util.StringUtils;

import java.beans.PropertyEditorSupport;

public class IsbnEditor extends PropertyEditorSupport {
    @Override
    public void setAsText(String text) {
        if (text == null) {
            setValue(null);
        }
        else {
            String value = text.trim();
            if (!StringUtils.isEmpty(value)) {
                setValue(Isbn.parseFrom(value));
            } else {
                setValue(null);
            }
        }
    }

    @Override
    public String getAsText() {
        Object value = getValue();
        return (value != null ? value.toString() : "");
    }
}
