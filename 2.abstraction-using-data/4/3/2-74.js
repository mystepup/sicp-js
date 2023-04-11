// 데이터 지향적 프로그래밍
// 부서마다 인사 기록을 하나의 파일로 관리
// 그 파일은 직원 이름이 key인 레코드들의 집합 (레코드 집합의 구체적인 구조는 부서마다 다를 수 있다)
// 각 직원의 레코드 자체도 address나 salary같은 식별자를 키로 한 정보 조각들의 집합

const {head, tail, is_null} = require("../../../common/utils");

function get_record(department, employee) {
    return is_null(department)
        ? null
        : head(head(department)) === employee
        ? tail(head(department))
        : get_record(tail(department), employee)
}

function get_salary(employee)  {
    return get("salary", employee);
}

function find_employee_record(employee, all_departments) {
    return is_null(all_departments)
        ? null
        : get_record(head(all_departments), employee) !== null
        ? get_record(head(all_departments), employee)
        : find_employee_record(employee, tail(all_departments))
}