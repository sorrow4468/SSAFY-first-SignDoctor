package com.ssafy.api.response;

import com.ssafy.db.entity.doctor.DoctorResume;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ResumeRes {

    private List<DoctorResume> list;
}
