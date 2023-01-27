package com.JinWook.Toy.WebService.JinWookWebPj.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "BOARD")
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class Board {

	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "TITLE")
	private String title;

	@Column(name = "CONTENT")
	private String content;

	@Column(name = "AUTHOR")
	private String author;

	@Column(name = "REG_DT")
	private LocalDateTime regDt;

	@Column(name = "UPD_DT")
	private LocalDateTime updDt;


}
