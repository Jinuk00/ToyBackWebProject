package com.JinWook.Toy.WebService.JinWookWebPj.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SaveBoardDto {
	private String title;
	private String content;
	private String author;
}
