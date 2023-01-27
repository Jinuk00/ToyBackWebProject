package com.JinWook.Toy.WebService.JinWookWebPj.Utils;


import lombok.*;
import org.apache.tomcat.util.codec.binary.StringUtils;

import java.util.Optional;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommonResponse {
	private String resultCode;
	private String message;
	private Object data;


	public static CommonResponse ok(){
		return CommonResponse.builder().resultCode("ok").message("정상처리됐습니다.").build();
	}
	public static CommonResponse ok(String msg){
		return CommonResponse.builder().resultCode("ok").message(msg).build();
	}

	public static CommonResponse data(Object data){
		return CommonResponse.builder().resultCode("ok").data(data).build();
	}
}
