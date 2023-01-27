package com.JinWook.Toy.WebService.JinWookWebPj.Service;

import com.JinWook.Toy.WebService.JinWookWebPj.Repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardService {
	private final BoardRepository boardRepository;


}
