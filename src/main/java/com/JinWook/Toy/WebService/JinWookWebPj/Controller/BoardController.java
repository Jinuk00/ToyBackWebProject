package com.JinWook.Toy.WebService.JinWookWebPj.Controller;

import com.JinWook.Toy.WebService.JinWookWebPj.Dto.BoardDto;
import com.JinWook.Toy.WebService.JinWookWebPj.Dto.SearchBoardParamDto;
import com.JinWook.Toy.WebService.JinWookWebPj.Service.BoardService;
import com.JinWook.Toy.WebService.JinWookWebPj.Utils.CommonResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class BoardController {
	private final BoardService boardService;

	@PutMapping("/api/saveBoard")
	public CommonResponse SaveBoard(@RequestBody BoardDto boardDto){
		boardService.SaveBoard(boardDto);
		return CommonResponse.ok("게시글 등록이 완료됐습니다.");
	}

	@PostMapping("/api/searchBoard")
	public CommonResponse SearchBoard(@RequestBody SearchBoardParamDto paramDto){
		log.info("받아온 값 {}",paramDto);
		return CommonResponse.data(boardService.SearchBoard(paramDto));
	}
}
