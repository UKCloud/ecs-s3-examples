package main

import (
	"fmt"
	"testing"
)

func TestTimeConsuming(t *testing.T) {
	if testing.Short() {
		t.Skip("skipping test in short mode.")
	}

}

func ExampleHello() {
	fmt.Println("hello")
	// Output: hello
}

func ExampleFindBucket() {
	FindBucket("my-bucketname")
	// Output: Bucket not found.
}

func ExampleCreateBucket() {
	CreateBucket("my-bucketname")
	// Output: Bucket my-bucketname created successfully.
}

func TestListDirectories(t *testing.T) {
	if len(ListDirectories()) <= 0 {
		t.Errorf("Should list at least one directory")
	}
}

func TestGetDirectory(t *testing.T) {
	if len(GetDirectory("my-bucketname")) <= 0 {
		t.Errorf("Contents should return at least one file")
	}
}

func ExampleUploadFile() {
	UploadFile("my-bucketname", "my-testfile.csv")
	// Output: Uploaded my-testfile.csv of size: 15 Successfully to: my-bucketname / my-testfile.csv
}

func ExampleDownloadFile() {
	DownloadFile("my-bucketname", "my-testfile.csv", "my-download.csv")
	// Output: Successfully saved my-download.csv
}

func ExampleDeleteFile() {
	DeleteFile("my-bucketname", "my-testfile.csv")
	// Output: Successfully deleted my-testfile.csv
}

func ExampleDeleteDirectory() {
	DeleteDirectory("my-bucketname")
	// Output: Successfully deleted my-bucketname
}
