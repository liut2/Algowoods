/*
* Need to double check security issues before publish
*/
Question = new Mongo.Collection("question");
/**
Question.insert(
	{
		question_number: question_number,
		title: title,
		body: body,
		difficulty: difficulty,
		total_submission_numbers: total_submission_numbers,
		passed_numbers: passed_numbers,
		tags: tags, (list)
		company_tags: company_tags, (list)
		example: example,
		topic: topic
	}
);
**/

Testcase = new Mongo.Collection("testcase");
/**
Testcase.insert(
	{
		question_number: question_number,
		test_cases : test_cases (dict, where key = case and value = answer)
	}
);
**/

HeaderFile = new Mongo.Collection("header_file");
/*
header_file.insert(
	{
		question_number: question_number,
		header_files: header_files (dict, where key = language and value = head file of that language)
	}
);
**/

Submission = new Mongo.Collection("submission");
/**
Submission.insert(
	{
		question_number: question_number,
		user_id: user_id,
		submit_time: submit_time,
		status: status, (list=[failed, time limit exceed, compilation error, memory limit exceed, wrong answer])
		if_favourite: if_favourite,
		language: language,
		code_file: code_file,
		run_time: run_time,
		percentage_passed: percentage_passed
	}
);
**/

Solution = new Mongo.Collection("solution");
/**
Solution.insert({
	question_number: question_number,
	code_file: code_file,
	answers: answers, (list)
	complexity: complexity
});
**/

User = new Mongo.Collection("user");
/**
User.insert(
	{
		username: username,
		facebook_id: facebook_id,
		email: email,
		solved_question_numbers: solved_question_numbers
	}
);
**/

Tutorial = new Mongo.Collection("tutorial");
/**
Tutorial.insert(
	{
		title: title,
		date: date,
		author: author,
		body: body,
		topic: topic
	}
);
**/
