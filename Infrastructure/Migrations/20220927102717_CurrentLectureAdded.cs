using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class CurrentLectureAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1afd7123-2a82-48f0-87a2-76f528ac1aa9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7a20a766-d5f2-4cf9-8252-09dcdc6bd3c2");

            migrationBuilder.AddColumn<int>(
                name: "CurrentLecture",
                table: "UserCourses",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "d580fd4d-a369-4e51-a7b0-7e86806c94cb", "d5cfc5d2-0851-4036-b606-eb82328319e1", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "1e17fddf-1b4f-4418-b606-303839356cd1", "2c5562df-57b2-41ac-ae4f-18232ec0a1b6", "Instructor", "INSTRUCTOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1e17fddf-1b4f-4418-b606-303839356cd1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d580fd4d-a369-4e51-a7b0-7e86806c94cb");

            migrationBuilder.DropColumn(
                name: "CurrentLecture",
                table: "UserCourses");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "1afd7123-2a82-48f0-87a2-76f528ac1aa9", "67e3b77d-46d2-453d-8b4d-f62e047ba383", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "7a20a766-d5f2-4cf9-8252-09dcdc6bd3c2", "1f9c1a99-70d4-4a32-9a64-42b36893fe6c", "Instructor", "INSTRUCTOR" });
        }
    }
}
