using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class PaymentIntentAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8cfc4a30-228e-44c0-815a-d96906316ad6");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "93cb0cf4-7e37-4275-acd2-bc4ff2cde64c");

            migrationBuilder.AddColumn<string>(
                name: "ClientSecret",
                table: "Basket",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PaymentIntentId",
                table: "Basket",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "7449bbbe-b41b-4a05-b7c8-0f9370bad721", "1de3b2df-d86c-4187-a227-234637706e75", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "f9c3a64f-54a7-4e80-a7de-2effd5c9545c", "27bfeb22-0f8b-4074-b3ca-436329922d40", "Instructor", "INSTRUCTOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7449bbbe-b41b-4a05-b7c8-0f9370bad721");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f9c3a64f-54a7-4e80-a7de-2effd5c9545c");

            migrationBuilder.DropColumn(
                name: "ClientSecret",
                table: "Basket");

            migrationBuilder.DropColumn(
                name: "PaymentIntentId",
                table: "Basket");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "8cfc4a30-228e-44c0-815a-d96906316ad6", "965a02f9-61b6-4870-8a4d-620a502ce3d5", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "93cb0cf4-7e37-4275-acd2-bc4ff2cde64c", "6b74c9fc-b269-4c1d-8587-ed420908e0ae", "Instructor", "INSTRUCTOR" });
        }
    }
}
