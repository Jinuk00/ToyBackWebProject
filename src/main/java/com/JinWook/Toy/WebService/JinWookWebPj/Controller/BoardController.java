package com.JinWook.Toy.WebService.JinWookWebPj.Controller;

import com.JinWook.Toy.WebService.JinWookWebPj.Dto.BoardDto;
import com.JinWook.Toy.WebService.JinWookWebPj.Dto.SearchBoardParamDto;
import com.JinWook.Toy.WebService.JinWookWebPj.Service.BoardService;
import com.JinWook.Toy.WebService.JinWookWebPj.Utils.CommonResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

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

	@PostMapping("/api/searchAllBoard")
	public CommonResponse SearchAllBoard(@RequestBody SearchBoardParamDto paramDto){
		return CommonResponse.data(boardService.SearchAllBoard(paramDto));
	}

	@GetMapping("/api/searchBoard/{id}")
	public CommonResponse SearchBoard(@PathVariable Long id){
		log.info("받아온 값 {}",id);
		return CommonResponse.data(boardService.DetailBoard(id));
	}
}
