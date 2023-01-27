package com.JinWook.Toy.WebService.JinWookWebPj.Controller;

import com.JinWook.Toy.WebService.JinWookWebPj.Dto.SaveBoardDto;
import com.JinWook.Toy.WebService.JinWookWebPj.Service.BoardService;
import com.JinWook.Toy.WebService.JinWookWebPj.Utils.CommonResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class BoardController {
	private final BoardService boardService;

	@PutMapping("/api/SaveBoard")
	public CommonResponse SaveBoard(@RequestBody SaveBoardDto saveBoardDto){
		log.info("받아온 값 {}",saveBoardDto);
		return CommonResponse.ok();
	}
}
