package com.ssafy.api.service;

import com.ssafy.api.response.ResumeRes;
import com.ssafy.db.entity.User;
import com.ssafy.db.entity.doctor.DoctorFile;
import com.ssafy.db.entity.doctor.DoctorInfo;
import com.ssafy.db.entity.doctor.DoctorResume;
import com.ssafy.db.repository.DoctorFileRepository;
import com.ssafy.db.repository.DoctorResumeRepository;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.doctor.DoctorInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.print.Doc;

@Service
public class ManagerServiceImpl implements ManagerService {

    @Autowired
    DoctorResumeRepository doctorResumeRepository;

    @Autowired
    DoctorFileRepository doctorFileRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    DoctorInfoRepository doctorInfoRepository;

    @Autowired
    PasswordEncoder passwordEncoder;
    public ResumeRes resumeList() {
        ResumeRes resumeRes = new ResumeRes();

        resumeRes.setList(doctorResumeRepository.findAll());
        return resumeRes;
    }

    public DoctorFile getDownloadPath(String email) {
        DoctorResume doctorResume = doctorResumeRepository.findByEmail((email));
        System.out.println(doctorResume.getId());
        DoctorFile doctorFile;
        doctorFile = doctorFileRepository.findByDoctorResumeId(doctorResume.getId());


        return doctorFile;
    }
    public String getName(String email) {
        DoctorResume doctorResume = doctorResumeRepository.findByEmail((email));
        return doctorResume.getName();
    }

    @Transactional
    public void deleteResume(String email) {
        DoctorResume doctorResume = doctorResumeRepository.findByEmail((email));

        doctorFileRepository.deleteByDoctorResumeId(doctorResume.getId());

        doctorResumeRepository.deleteByEmail(email);

    }

    public void register(String email) {
        DoctorResume doctorResume = doctorResumeRepository.findByEmail((email));
        User user = new User();
        user.setName(doctorResume.getName());
        user.setUserId(doctorResume.getUserId());
        user.setPassword(passwordEncoder.encode(doctorResume.getPassword()));
        user.setEmail(doctorResume.getEmail());
        user.setRole("ROLE_DOCTOR");

        userRepository.save(user);

        DoctorInfo doctorInfo = new DoctorInfo();
        doctorInfo.setDepartName(doctorResume.getDepartName());
        doctorInfo.setPhone(doctorResume.getPhone());
        doctorInfo.setUser(user);

        doctorInfoRepository.save(doctorInfo);
    }
}
