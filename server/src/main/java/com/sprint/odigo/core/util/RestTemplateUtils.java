package com.sprint.odigo.core.util;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Getter
@Setter
@Component
public class RestTemplateUtils {

    private boolean hideParam;
    private boolean hideResBody;

    public RestTemplateUtils() {
        super();
    }

    public RestTemplateUtils(boolean hideParam, boolean hideResBody) {
        super();
        this.hideParam = hideParam;
        this.hideResBody = hideResBody;
    }

    private RestTemplate getRestTemplate(Integer timeout) {

        RestTemplate restTemplate = new RestTemplate();

        HttpComponentsClientHttpRequestFactory clientHttpRequestFactory = new HttpComponentsClientHttpRequestFactory();
        clientHttpRequestFactory.setConnectionRequestTimeout(timeout);
//        clientHttpRequestFactory.setReadTimeout(timeout);
        clientHttpRequestFactory.setConnectTimeout(timeout);
        restTemplate.setRequestFactory(clientHttpRequestFactory);

        return restTemplate;
    }

    public String getJson(String url, Integer timeout) throws Exception {
        return getJson(url, timeout, null);
    }

    public String getJson(String url, Integer timeout, HttpHeaders httpHeaders) throws Exception {
        return (String) getJsonGetResponse(url, timeout, httpHeaders, null).getBody();
    }

    public String getJson(String url, Integer timeout, HttpHeaders httpHeaders, Map<String, ?> uriVariables) throws Exception {
        return (String) this.getJsonGetResponse(url, timeout, httpHeaders, uriVariables).getBody();
    }

    public Map<String, String> getJsonBodyWithHttpStatusCode(String url, Integer timeout, HttpHeaders httpHeaders) throws Exception {
        ResponseEntity responseEntity = getJsonGetResponse(url, timeout, httpHeaders, null);
        Map<String, String> responseMap = new HashMap<>();
        responseMap.put("statusCode", String.valueOf(responseEntity.getStatusCode()));
        responseMap.put("body", (String) responseEntity.getBody());
        return responseMap;
    }

    public Map<String, String> getJsonBodyWithHttpStatusCode(String url, Integer timeout, HttpHeaders httpHeaders, Map<String, String> uriVariables) throws Exception {
        ResponseEntity responseEntity = getJsonGetResponse(url, timeout, httpHeaders, uriVariables);
        Map<String, String> responseMap = new HashMap<>();
        responseMap.put("statusCode", String.valueOf(responseEntity.getStatusCode()));
        responseMap.put("body", (String) responseEntity.getBody());
        return responseMap;
    }

    public ResponseEntity getJsonGetResponse(String url, Integer timeout, HttpHeaders httpHeaders, Map<String, ?> uriVariables) throws Exception {

        RestTemplate restTemplate = this.getRestTemplate(timeout);

        URI uri = uriVariables == null ? URI.create(url) : restTemplate.getUriTemplateHandler().expand(url, uriVariables);

        HttpMethod httpMethod = HttpMethod.GET;

        HttpEntity<?> requestEntity = new HttpEntity<>(httpHeaders);

        long preTime = System.currentTimeMillis();
        log.info("==================== REQUEST =====================");
        log.info("URI           : {} (Timeout : {}ms)", uri, timeout);
        log.info("Method        : {}", httpMethod);
        if (!hideParam) {
            log.info("Request       : {}", requestEntity);
        }
        log.info("==================================================");

        ResponseEntity<String> responseEntity = restTemplate.exchange(uri, httpMethod, requestEntity, String.class);

        long postTime = System.currentTimeMillis();
        long elapsedTime = postTime - preTime;
        log.info("==================== RESPONSE ====================");
        log.info("Status        : {}", responseEntity.getStatusCodeValue());
        log.info("Headers       : {}", responseEntity.getHeaders());
        if (!hideResBody) {
            log.info("Response body : {}", CommonUtils.nvl(responseEntity.getBody(), "").replace("\n", "").replace("\r", "").replace(" ", ""));
        }
        log.info("elapsed Time  : {} ms", elapsedTime);
        log.info("==================================================");

        return responseEntity;
    }

    public String putJsonBody(String url, String jsonStr, Integer timeout, HttpHeaders httpHeaders) throws Exception {

        RestTemplate restTemplate = this.getRestTemplate(timeout);

        URI uri = URI.create(url);
        HttpMethod httpMethod = HttpMethod.PUT;

        HttpEntity<?> requestEntity = new HttpEntity<>(jsonStr, httpHeaders);

        long preTime = System.currentTimeMillis();
        log.info("==================== REQUEST =====================");
        log.info("URI           : {} (Timeout : {}ms)", uri, timeout);
        log.info("Method        : {}", httpMethod);
        if (!hideParam) {
            log.info("Request       : {}", requestEntity);
        }
        log.info("==================================================");

        ResponseEntity<String> responseEntity = restTemplate.exchange(uri, httpMethod, requestEntity, String.class);

        long postTime = System.currentTimeMillis();
        long elapsedTime = postTime - preTime;
        log.info("==================== RESPONSE ====================");
        log.info("Status        : {}", responseEntity.getStatusCodeValue());
        log.info("Headers       : {}", responseEntity.getHeaders());
        if (!hideResBody) {
            log.info("Response body : {}", CommonUtils.nvl(responseEntity.getBody(), "").replace("\n", "").replace("\r", "").replace(" ", ""));
        }
        log.info("elapsed Time  : {} ms", elapsedTime);
        log.info("==================================================");

        return responseEntity.getBody();
    }

    @SuppressWarnings("rawtypes")
    public ResponseEntity putJsonBodyGetResponse(String url, String jsonStr, Integer timeout, HttpHeaders httpHeaders) throws Exception {

        RestTemplate restTemplate = this.getRestTemplate(timeout);

        URI uri = URI.create(url);
        HttpMethod httpMethod = HttpMethod.PUT;

        HttpEntity<?> requestEntity = new HttpEntity<>(jsonStr, httpHeaders);

        long preTime = System.currentTimeMillis();
        log.info("==================== REQUEST =====================");
        log.info("URI           : {} (Timeout : {}ms)", uri, timeout);
        log.info("Method        : {}", httpMethod);
        if (!hideParam) {
            log.info("Request       : {}", requestEntity);
        }
        log.info("==================================================");

        ResponseEntity<String> responseEntity = restTemplate.exchange(uri, httpMethod, requestEntity, String.class);

        long postTime = System.currentTimeMillis();
        long elapsedTime = postTime - preTime;
        log.info("==================== RESPONSE ====================");
        log.info("Status        : {}", responseEntity.getStatusCodeValue());
        log.info("Headers       : {}", responseEntity.getHeaders());
        if (!hideResBody) {
            log.info("Response body : {}", CommonUtils.nvl(responseEntity.getBody(), "").replace("\n", "").replace("\r", "").replace(" ", ""));
        }
        log.info("elapsed Time  : {} ms", elapsedTime);
        log.info("==================================================");

        return responseEntity;
    }
    public String deleteJson(String url, Integer timeout, HttpHeaders httpHeaders) throws Exception {

        RestTemplate restTemplate = this.getRestTemplate(timeout);

        URI uri = URI.create(url);
        HttpMethod httpMethod = HttpMethod.DELETE;

        HttpEntity<?> requestEntity = new HttpEntity<>(httpHeaders);

        long preTime = System.currentTimeMillis();
        log.info("==================== REQUEST =====================");
        log.info("URI           : {} (Timeout : {}ms)", uri, timeout);
        log.info("Method        : {}", httpMethod);
        if (!hideParam) {
            log.info("Request       : {}", requestEntity);
        }
        log.info("==================================================");

        ResponseEntity<String> responseEntity = restTemplate.exchange(uri, httpMethod, requestEntity, String.class);

        long postTime = System.currentTimeMillis();
        long elapsedTime = postTime - preTime;
        log.info("==================== RESPONSE ====================");
        log.info("Status        : {}", responseEntity.getStatusCodeValue());
        log.info("Headers       : {}", responseEntity.getHeaders());
        if (!hideResBody) {
            log.info("Response body : {}", CommonUtils.nvl(responseEntity.getBody(), "").replace("\n", "").replace("\r", "").replace(" ", ""));
        }
        log.info("elapsed Time  : {} ms", elapsedTime);
        log.info("==================================================");

        return responseEntity.getBody();
    }

    public String postJsonBody(String url, String jsonStr, Integer timeout) throws Exception {
        return postJsonBody(URI.create(url), jsonStr, timeout, null);
    }

    public String postJsonBody(String url, String jsonStr, Integer timeout, HttpHeaders httpHeaders) throws Exception {
        return postJsonBody(URI.create(url), jsonStr, timeout, httpHeaders);
    }

    public String postJsonBody(URI uri, String jsonStr, Integer timeout, HttpHeaders httpHeaders) throws Exception {

        RestTemplate restTemplate = this.getRestTemplate(timeout);

        HttpMethod httpMethod = HttpMethod.POST;

        if (httpHeaders == null) {
            httpHeaders = new HttpHeaders();
        }
        httpHeaders.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
        httpHeaders.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

        HttpEntity<?> requestEntity = new HttpEntity<>(jsonStr, httpHeaders);

        long preTime = System.currentTimeMillis();
        log.info("==================== REQUEST =====================");
        log.info("URI           : {} (Timeout : {}ms)", uri, timeout);
        log.info("Method        : {}", httpMethod);
        if (!hideParam) {
            log.info("Request       : {}", requestEntity);
        }
        log.info("==================================================");

        try {
            ResponseEntity<String> responseEntity = restTemplate.exchange(uri, httpMethod, requestEntity, String.class);

            long postTime = System.currentTimeMillis();
            long elapsedTime = postTime - preTime;
            log.info("==================== RESPONSE ====================");
            log.info("Status        : {}", responseEntity.getStatusCodeValue());
            log.info("Headers       : {}", responseEntity.getHeaders());
            if (!hideResBody) {
                log.info("Response body : {}", CommonUtils.nvl(responseEntity.getBody(), "").replace("\n", "").replace("\r", "").replace(" ", ""));
            }
            log.info("elapsed Time  : {} ms", elapsedTime);
            log.info("==================================================");

            return responseEntity.getBody();
        } catch (HttpClientErrorException e) {
            log.error(e.getResponseBodyAsString());
            throw e;
        }
    }

    public Map<String, String> postJsonBodyWithHttpStatusCode(String url, String jsonStr, Integer timeout, HttpHeaders httpHeaders) throws Exception {
        return postJsonBodyWithHttpStatusCode(URI.create(url), jsonStr, timeout, httpHeaders);
    }

    public Map<String, String> postJsonBodyWithHttpStatusCode(URI uri, String jsonStr, Integer timeout, HttpHeaders httpHeaders) throws Exception {

        RestTemplate restTemplate = this.getRestTemplate(timeout);

        HttpMethod httpMethod = HttpMethod.POST;

        if (httpHeaders == null) {
            httpHeaders = new HttpHeaders();
        }
        httpHeaders.setContentType(new MediaType("application", "json", Charset.forName("UTF-8")));
        httpHeaders.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

        HttpEntity<?> requestEntity = new HttpEntity<>(jsonStr, httpHeaders);

        long preTime = System.currentTimeMillis();
        log.info("==================== REQUEST =====================");
        log.info("URI           : {} (Timeout : {}ms)", uri, timeout);
        log.info("Method        : {}", httpMethod);
        if (!hideParam) {
            log.info("Request       : {}", requestEntity);
        }
        log.info("==================================================");

        try {
            ResponseEntity<String> responseEntity = restTemplate.exchange(uri, httpMethod, requestEntity, String.class);

            long postTime = System.currentTimeMillis();
            long elapsedTime = postTime - preTime;
            log.info("==================== RESPONSE ====================");
            log.info("Status        : {}", responseEntity.getStatusCodeValue());
            log.info("Headers       : {}", responseEntity.getHeaders());
            if (!hideResBody) {
                log.info("Response body : {}", CommonUtils.nvl(responseEntity.getBody(), "").replace("\n", "").replace("\r", "").replace(" ", ""));
            }
            log.info("elapsed Time  : {} ms", elapsedTime);
            log.info("==================================================");

            Map<String, String> responseMap = new HashMap<String, String>();
            responseMap.put("statusCode", String.valueOf(responseEntity.getStatusCodeValue()));
            responseMap.put("body", responseEntity.getBody());
            return responseMap;
        } catch (HttpClientErrorException e) {
            log.error(e.getResponseBodyAsString());
            throw e;
        }
    }

    public String postFormData(String url, MultiValueMap<String, String> parametersMap, Integer timeout)
            throws Exception {

        RestTemplate restTemplate = this.getRestTemplate(timeout);

        URI uri = URI.create(url);
        HttpMethod httpMethod = HttpMethod.POST;

        long preTime = System.currentTimeMillis();
        log.info("==================== REQUEST =====================");
        log.info("URI               : {} (Timeout : {}ms)", url, timeout);
        log.info("Method            : {}", httpMethod);
        if (!hideParam) {
            log.info("Request           : {}", parametersMap);
        }
        log.info("==================================================");

        ResponseEntity<String> responseEntity = restTemplate.postForEntity(uri, parametersMap, String.class);

        long postTime = System.currentTimeMillis();
        long elapsedTime = postTime - preTime;
        log.info("==================== RESPONSE ====================");
        log.info("Status        : {}", responseEntity.getStatusCodeValue());
        log.info("Headers       : {}", responseEntity.getHeaders());
        if (!hideResBody) {
            log.info("Response body : {}", CommonUtils.nvl(responseEntity.getBody(), "").replace("\n", "").replace("\r", "").replace(" ", ""));
        }
        log.info("elapsed Time  : {} ms", elapsedTime);
        log.info("==================================================");

        return responseEntity.getBody();
    }

}
