package com.JinWook.Toy.WebService.JinWookWebPj.Service;

import com.JinWook.Toy.WebService.JinWookWebPj.Dto.BoardDto;
import com.JinWook.Toy.WebService.JinWookWebPj.Dto.SearchBoardParamDto;
import com.JinWook.Toy.WebService.JinWookWebPj.Entity.Board;
import com.JinWook.Toy.WebService.JinWookWebPj.Repository.BoardQuery;
import com.JinWook.Toy.WebService.JinWookWebPj.Repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {
	private final BoardRepository boardRepository;
	private final BoardQuery boardQuery;

	@Transactional
	public void SaveBoard(BoardDto boardDto){
		Board board = boardDto.toEntity();
		boardRepository.save(board);
	}

	public List<BoardDto> SearchBoard(SearchBoardParamDto paramDto) {
		return boardQuery.findBoard(paramDto);
	}
}
