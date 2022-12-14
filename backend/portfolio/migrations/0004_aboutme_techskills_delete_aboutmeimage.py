# Generated by Django 4.1 on 2022-09-24 21:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_alter_archprojects_image_alter_codingprojects_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='AboutMe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('aboutMeText', models.TextField()),
                ('image', models.ImageField(upload_to='my_image/')),
            ],
        ),
        migrations.CreateModel(
            name='TechSkills',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('techSkill', models.CharField(max_length=50)),
                ('techSkillRange', models.IntegerField()),
                ('person', models.ManyToManyField(to='portfolio.aboutme')),
            ],
        ),
        migrations.DeleteModel(
            name='AboutMeImage',
        ),
    ]
