package com.JinWook.Toy.WebService.JinWookWebPj.Dto;

import com.JinWook.Toy.WebService.JinWookWebPj.Entity.Board;
import com.querydsl.core.annotations.QueryProjection;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BoardDto {

	private Long id;
	private String title;
	private String author;
	private String content;


	public Board toEntity(){
		return Board.builder()
						.title(title).author(author).content(content)
						.regDt(LocalDateTime.now())
						.updDt(LocalDateTime.now()).build();
	}

	@QueryProjection
	public BoardDto(Long id, String title, String author) {
		this.id = id;
		this.title = title;
		this.author = author;
	}
}
