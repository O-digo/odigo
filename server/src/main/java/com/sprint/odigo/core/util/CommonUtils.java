package com.sprint.odigo.core.util;

import org.springframework.util.StringUtils;

import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CommonUtils {

    /**
     * 프로퍼티 값 가져오기
     *
     * @param name
     * @return
     */
    public static String getProperties(String name) {
        String msg = "";

        try {
            InputStream inputStream = CommonUtils.class.getResourceAsStream("/clare-" + nvl(System.getProperty("spring.profiles.active"), "local") + ".properties");
            Properties props = new Properties();
            props.load(new java.io.BufferedInputStream(inputStream));

            // 항목 읽기
            msg = props.getProperty(name);

        } catch (Exception e) {
            e.printStackTrace();
        }

        return msg;
    }

    public static String getActiveProfile() {
        return nvl(System.getProperty("spring.profiles.active"), "local");
    }

    public static boolean isProduction() {
        return "production".equalsIgnoreCase(getActiveProfile());
    }

    public static boolean isLocal() {
        return "local".equalsIgnoreCase(getActiveProfile());
    }

    public static boolean isDev() {
        return "dev".equalsIgnoreCase(getActiveProfile());
    }

    /**
     * nvl
     *
     * @param str
     * @param defultStr
     * @return
     */
    public static String nvl(String str, String defultStr) { return StringUtils.hasText(str) ? str : defultStr; }

    public static BigDecimal nvl(BigDecimal num, String defultNum) { return isBlank(num) ? new BigDecimal(defultNum) : num; }

    public static boolean isBlank(String str) {
        return !StringUtils.hasText(str);
    }

    public static boolean isBlank(BigDecimal decimal) {
        return decimal == null || decimal.compareTo(BigDecimal.ZERO) == 0;
    }

    public static boolean isBlank(String[] strArr) {
        return strArr == null || strArr.length == 0;
    }

    @SuppressWarnings("rawtypes")
    public static boolean isBlank(List list) {
        return list == null || list.isEmpty();
    }

    @SuppressWarnings("rawtypes")
    public static boolean isBlank(Map map) {
        return map == null || map.isEmpty();
    }

    public static boolean isBlank(Object obj) {
        return obj == null;
    }

    public static boolean isContains(String str, String targetValue) {
        return StringUtils.hasText(str) && str.contains(targetValue);
    }

    public static boolean isContains(String[] strArr, String targetValue) {

        for (String str : strArr) {
            if (StringUtils.hasText(str) && str.equals(targetValue)) {
                return true;
            }
        }

        return false;
    }

    public static String encode(String value) throws UnsupportedEncodingException {
        return URLEncoder.encode(value, StandardCharsets.UTF_8.toString());
    }

    public static String decode(String value) throws UnsupportedEncodingException {
        return URLDecoder.decode(value.replaceAll("%(?![0-9a-fA-F]{2})", "%25").replaceAll("\\+", "%2B"), StandardCharsets.UTF_8.toString());
    }

    public static boolean isIntegerValue(BigDecimal bd) {
        return bd.signum() == 0 || bd.scale() <= 0 || bd.stripTrailingZeros().scale() <= 0;
    }

    /**
     * @param format 현재날짜 default format : yyyy-MM-dd
     **/
    public static String getCurrentDate(String format) {

        if (isBlank(format)) {
            format = "yyyy-MM-dd";
        }

        SimpleDateFormat simpledateformat = new SimpleDateFormat(format, Locale.KOREA);
        return simpledateformat.format(new Date());
    }

    public static String getCurrentDateTime() {
        SimpleDateFormat simpledateformat = new SimpleDateFormat("yyyyMMddHHmmss", Locale.KOREA);
        return simpledateformat.format(new Date());
    }

    /**
     * 특정 일짜에 특정 날짜 만큼 더해진 날짜를 반환한다. <br>
     * ex) addDate("20080226", 2L) - 입력 날짜에 이틀뒤의 날짜를 구함.
     *
     * @param date 시작일자 (yyyyMMdd)
     * @param day  시작일자에 더할 날짜
     * @return Date - 시작일자에 day일짜 만큼 더해진 날짜 반환한다. (yyyyMMdd)
     * @throws ParseException
     */
    public static String addDate(String date, long day) {

        if (isBlank(date) || !(date.length() == 8 || date.length() == 10)) {
            throw new IllegalArgumentException("파라미터가 올바르지 않습니다.");
        }

        String formatter = "yyyyMMdd";
        if (date.contains("-")) {
            formatter = "yyyy-MM-dd";
            int year = Integer.parseInt(date.substring(0, 4));
            int month = Integer.parseInt(date.substring(5, 7));
            int dateOfMonth = Integer.parseInt(date.substring(8, 10));
            return LocalDate.of(year, month, dateOfMonth).plusDays(day).format(DateTimeFormatter.ofPattern(formatter));
        } else {
            formatter = "yyyyMMdd";
            int year = Integer.parseInt(date.substring(0, 4));
            int month = Integer.parseInt(date.substring(4, 6));
            int dateOfMonth = Integer.parseInt(date.substring(6, 8));
            return LocalDate.of(year, month, dateOfMonth).plusDays(day).format(DateTimeFormatter.BASIC_ISO_DATE);
        }
    }

    /**
     * 기준월에 특정 달 만큼 더해진 날짜를 반환한다. <br>
     * ex) addMonth("200802", 2L) - 기준월에 두달 뒤의 날짜를 구함.
     *
     * @param yearMonth  기준월 (yyyyMM)
     * @param monthValue 기준월에 더할 달
     * @return Date - 기준월에 monthValue일짜 만큼 더해진 날짜 반환한다. (yyyyMM)
     * @throws ParseException
     */
    public static String addMonth(String yearMonth, long monthValue) throws Exception {

        if (yearMonth.length() != 6) {
            throw new IllegalArgumentException("파라미터가 올바르지 않습니다.");
        }

        int year = Integer.parseInt(yearMonth.substring(0, 4));
        int month = Integer.parseInt(yearMonth.substring(4, 6));
        int dateOfMonth = 1;

        return LocalDate.of(year, month, dateOfMonth).plusMonths(monthValue).format(DateTimeFormatter.ofPattern("yyyyMM"));
    }

    /**
     * 날짜 비교
     * ex) betweenDate("20200301", "20200226") return 4
     *     betweenDate("20200226", "20200226") return 0
     *     betweenDate("20200201", "20200226") return -25
     * @param date (yyyyMMdd)
     * @param date2 (yyyyMMdd)
     * @return long
     * @throws Exception
     */
    public static long betweenDate(String date, String date2) throws Exception {

        if (isBlank(date) || date.length() != 8 || isBlank(date2) || date2.length() != 8) {
            throw new IllegalArgumentException("파라미터가 올바르지 않습니다.");
        }

        int year = Integer.parseInt(date.substring(0, 4));
        int month = Integer.parseInt(date.substring(4, 6));
        int dateOfMonth = Integer.parseInt(date.substring(6, 8));
        LocalDate localDate = LocalDate.of(year, month, dateOfMonth);

        year = Integer.parseInt(date2.substring(0, 4));
        month = Integer.parseInt(date2.substring(4, 6));
        dateOfMonth = Integer.parseInt(date2.substring(6, 8));
        LocalDate localDate2 = LocalDate.of(year, month, dateOfMonth);

        return ChronoUnit.DAYS.between(localDate2, localDate);
    }

    public static boolean isNumber(String num) {

        if (!isBlank(num)) {
            try {
                Double.parseDouble(num);
                return true;
            } catch (NumberFormatException e) {
                return false;
            }
        }

        return false;
    }

    /**
     * 리스트를 count만큼 잘라서 리턴
     * @param <T>
     * @param list : 리스트
     * @param size : 자르는 카운트
     * @throws Exception
     */
/*    public static <T> List<List<T>> partition(List<T> list, int size) throws Exception {
        List<List<T>> resultList = new ArrayList<List<T>> ();

        if (!isBlank(list)) {
            resultList = ListUtils.partition(list, size);
        }

        return resultList;
    }*/

    /**
     * 날짜 비교
     * @param date1
     * @param date2
     * @param format
     * @return date1 > date2 1
     *         date1 < date2 -1
     * @throws Exception
     */
    public static int dateCompare(String date1, String date2, String format) throws Exception {
        if (isBlank(date1) || isBlank(date2)) {
            throw new IllegalArgumentException("파라미터가 올바르지 않습니다.");
        }

        if (isBlank(format)) {
            format = "yyyy-MM-dd";
        }

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);
        Date day1 = simpleDateFormat.parse(date1);
        Date day2 = simpleDateFormat.parse(date2);

        return day1.compareTo(day2);
    }

    /**
     *  특정 날짜에 대하여 요일을 구함(일 : 1 ~ 토 : 7)
     */
    public static int getDateDay(String date, String dateType) throws Exception {
        SimpleDateFormat dateFormat = new SimpleDateFormat(dateType);
        Date nDate = dateFormat.parse(date);
        Calendar cal = Calendar.getInstance();
        cal.setTime(nDate);
        return cal.get(Calendar.DAY_OF_WEEK);
    }

    /**
     * BASE64 인코딩
     */
    public static String encodeStrToBase64(String str) {
        if (isBlank(str)) return str;
        return Base64.getEncoder().encodeToString(str.getBytes(StandardCharsets.UTF_8));
    }

    /**
     * BASE64 디코딩
     */
    public static String decodeBase64ToString(String encodedStr) {
        if (isBlank(encodedStr)) return encodedStr;
        byte[] decodedBytes = Base64.getDecoder().decode(encodedStr);
        return new String(decodedBytes);
    }

    public static String deciamlComma(BigDecimal decimal) {
        if (decimal == null) {
            return "";
        }

        DecimalFormat formatter = new DecimalFormat("###,###");
        formatter.format(decimal);
        return formatter.format(decimal);
    }

    public static boolean isEqual(Object obj1, Object obj2) {
        if(obj1 == null && obj2 == null) return true;
        if(obj1 == null && obj2 != null) return false;
        if(obj1 != null && obj2 == null) return false;
        return obj1.equals(obj2);
    }

    public static boolean isNumberic(String str) {
        return str.chars().allMatch(Character::isDigit);
    }

    /***
     * @param <P> enum type of query parameter which used to select clare table
     * @param enumMap enumMap for query parameter which used to select clare table
     * @return convert enumMap to Map(key String, value Object) key is value of enumMap's key.name().
     */
    public static <P extends Enum<P>> Map<String, Object> getStringMap(EnumMap<P, Object> enumMap) {
        Map<String, Object> rslt = new HashMap<>();

        for(Map.Entry<P, Object> item : enumMap.entrySet()){
            rslt.put(item.getKey().name(), item.getValue());
        }

        return rslt;
    }

    public static String snakeToCamel(String snakeCase){
        Pattern compile = Pattern.compile("([a-z])_([a-z])");
        Matcher matcher = compile.matcher(snakeCase);
        String convert = matcher.replaceAll(matchResult -> {
            return String.format(
                    "%s%s",
                    matchResult.group(1).toLowerCase(),
                    matchResult.group(2).toUpperCase()
            );
        });
        return convert;
    }

    public static String camelToSnake(String camelCase) {
        Pattern pattern = Pattern.compile("([a-z])([A-Z])");
        Matcher matcher = pattern.matcher(camelCase);

        String convert = matcher.replaceAll(matchResult -> {
            return String.format("%s_%s", matchResult.group(1).toLowerCase(), matchResult.group(2).toLowerCase());
        });
        return convert;
    }

    public static <E extends Enum<E>> Map<String, Object> covertEnumMap(Map<E, Object> enumMap) {
        HashMap<String, Object> rsltMap = new HashMap<>();

        for(Map.Entry<E, Object> item : enumMap.entrySet()){
            rsltMap.put(item.getKey().name(), item.getValue());
        }

        return  rsltMap;
    }
}
